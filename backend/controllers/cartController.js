const { Cart } = require("../models/cart");

// Add item to cart
exports.addToCart = async (req, res) => {
    const { userId, cartItems } = req.body;
  
    try {
      for (const item of cartItems) {
        const { productId, productName, quantity, price } = item;
  
        // Check if the item already exists in the cart
        let cartItem = await Cart.findOne({ userId, productId });
  
        if (cartItem) {
          // If item exists, update the quantity
          cartItem.quantity += quantity;
        } else {
          // If item does not exist, create a new cart item
          cartItem = new Cart({ userId, productId, productName, quantity, price });
        }
  
        // Save the cart item to the database
        await cartItem.save();
      }
  
      res.status(201).json({ message: "Cart items added successfully" });
    } catch (error) {
      console.error("Error adding to cart:", error);
      res.status(500).json({ error: "Error adding to cart" });
    }
  };

// Update item quantity in cart
exports.updateCartItem = async (req, res) => {
  const { userId, productId,productName, quantity } = req.body;

  try {
    // Find the cart item by userId and productId
    let cartItem = await Cart.findOne({ userId, productId });

    if (cartItem) {
      // Update the quantity
      cartItem.quantity = quantity;
      await cartItem.save();
      res.status(200).json(cartItem);
    } else {
      res.status(404).json({ error: "Cart item not found" });
    }
  } catch (error) {
    console.error("Error updating cart item:", error);
    res.status(500).json({ error: "Error updating cart item" });
  }
};

// Remove item from cart
exports.removeFromCart = async (req, res) => {
  const { userId, productId } = req.params;

  try {
    // Find and delete the cart item
    await Cart.findOneAndDelete({ userId, productId });
    res.status(200).json({ message: "Cart item removed successfully" });
  } catch (error) {
    console.error("Error removing from cart:", error);
    res.status(500).json({ error: "Error removing from cart" });
  }
};

exports.getCartItems = async (req, res) => {
    const { userId } = req.params;
  
    try {
      const cartItems = await Cart.find({ userId });
      res.status(200).json(cartItems);
    } catch (error) {
      console.error("Error fetching cart items:", error);
      res.status(500).json({ error: "Error fetching cart items" });
    }
  };
  
// Clear all cart items for a user
exports.clearCart = async (req, res) => {
  const { userId } = req.params;

  try {
    await Cart.deleteMany({ userId });
    res.status(200).json({ message: "Cart cleared successfully" });
  } catch (error) {
    console.error("Error clearing cart:", error);
    res.status(500).json({ error: "Error clearing cart" });
  }
};
