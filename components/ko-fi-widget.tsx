"use client"

export function KoFiWidget() {
  return (
    <section
      className="landing-kofi w-full py-6 px-4 sm:px-6 flex justify-center border-t border-border/60 bg-muted/20"
      aria-label="Support on Ko-fi"
    >
      <style
        // 直接內嵌 Ko-fi 官方按鈕樣式，避免額外載入 Script
        dangerouslySetInnerHTML={{
          __html: `
img.kofiimg{display:inline-block;vertical-align:middle;height:13px;width:20px;padding:0;border:none;margin:0 5px 3px 0;content:url('https://storage.ko-fi.com/cdn/cup-border.png')}
.kofiimg:after{vertical-align:middle;height:25px;padding:0;border:none;margin:0 6px 4px 0;content:url('https://storage.ko-fi.com/cdn/whitelogo.svg')}
.btn-container{display:inline-block;white-space:nowrap;min-width:160px}
span.kofitext{color:#fff;letter-spacing:-0.15px;vertical-align:middle;line-height:33px;padding:0;text-align:center;text-decoration:none;text-shadow:0 1px 1px rgba(34,34,34,0.05)}
.kofitext a{color:#fff;text-decoration:none}
.kofitext a:hover{color:#fff;text-decoration:none}
a.kofi-button{box-shadow:1px 1px 0 rgba(0,0,0,0.2);line-height:36px;min-width:150px;display:inline-block;background-color:#72a4f2;padding:2px 12px;text-align:center;border-radius:7px;color:#fff;cursor:pointer;overflow-wrap:break-word;vertical-align:middle;border:0 none #fff;font-family:'Quicksand',Helvetica,'Century Gothic',sans-serif;text-decoration:none;text-shadow:none;font-weight:700;font-size:14px}
a.kofi-button:visited{color:#fff;text-decoration:none}
a.kofi-button:hover{opacity:.85;color:#f5f5f5;text-decoration:none}
a.kofi-button:active{color:#f5f5f5;text-decoration:none}
.kofitext img.kofiimg{height:15px;width:22px;display:inline-block;animation:kofi-wiggle 3s infinite}
@keyframes kofi-wiggle{
0%{transform:rotate(0) scale(1)}
60%{transform:rotate(0) scale(1)}
75%{transform:rotate(0) scale(1.12)}
80%{transform:rotate(0) scale(1.1)}
84%{transform:rotate(-10deg) scale(1.1)}
88%{transform:rotate(10deg) scale(1.1)}
92%{transform:rotate(-10deg) scale(1.1)}
96%{transform:rotate(10deg) scale(1.1)}
100%{transform:rotate(0) scale(1)}
}
        `,
        }}
      />
      <div className="btn-container">
        <a
          title="Support me on ko-fi.com"
          className="kofi-button"
          href="https://ko-fi.com/J3J11VX11I"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="kofitext">
            <img
              src="https://storage.ko-fi.com/cdn/cup-border.png"
              alt="Ko-fi donations"
              className="kofiimg"
            />
            Support me on Ko-fi
          </span>
        </a>
      </div>
    </section>
  )
}
