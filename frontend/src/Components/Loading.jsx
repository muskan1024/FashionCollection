import React from "react";

const Loading = () => {
  const NUM_PLACEHOLDERS = 10;

  return (
    // <div className="grid grid-flow-col auto-cols-auto gap-10 justify-items-center">
    <>
      {Array.from({ length: NUM_PLACEHOLDERS }).map((_, index) => (
        <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div class="animate-pulse space-x-4">
            <div class="rounded-md bg-slate-600 h-20 w-full"></div>
            <div class="space-y-6 py-1">
              <div class="h-2 bg-slate-600 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-600 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-600 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-600 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
      </>
  );
};

export default Loading;
