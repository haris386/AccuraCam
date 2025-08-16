import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <>
    <footer
      className="py-8 px-6 bg-black text-white"
      style={{ padding: "4rem" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* 3 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Column 1 - GET THE APP */}
          <div className="text-left">
            <h2
              className="leading-tight"
              style={{ fontSize: "100px", fontWeight: 500 }}
            >
              GET <br /> THE APP
            </h2>
          </div>

          {/* Column 2 - Center Image */}
          <div className="flex justify-center">
            <img
              src="/Images/footerLogo.png"
              alt="Footer Logo"
              className="h-auto"
              style={{ width: "100%" }}
            />
          </div>

          {/* Column 3 - Text + Button */}
          <div
            className="text-right space-y-4"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "123px",
              width: "100%",
              alignItems: "end",
            }}
          >
            <p
              className="leading-snug font-medium"
              style={{ fontSize: "25px" }}
            >
              AccuraCam – <br />
              Capture. Tag. <br />
              Sync. Done.
            </p>
            <Button
              className="text-black rounded-full"
              style={{
                backgroundColor: "white",
                padding: "25px 18px",
              }}
            >
              Watch How It Works
              <img
                src="/Icons/VectorB.png"
                alt="Arrow Icon"
                className="w-3 h-4 ml-2"
              />
            </Button>
          </div>
        </div>
      </div>
    </footer>
       <div style={{ width: "100%", backgroundColor: "black" }}>
        <img src="/Images/multiColor2.png" alt="" />
      </div>
      </>
  );
}
