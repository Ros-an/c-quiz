import React from "react";

function Code({ code }: { code: string }) {
  return (
    <div className="code">
      <pre>{code}</pre>
    </div>
  );
}

export default Code;
