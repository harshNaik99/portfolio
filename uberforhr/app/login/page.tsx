"use client";

export default function LoginPage() {
  return (
    <div style={{
      display:"flex",
      height:"100vh",
      width:"100%",
      background:"#f7f7f7"
    }}>

      {/* LEFT SIDE CONTENT */}
      <div style={{
        flex:1,
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        padding:"60px"
      }}>
        <h1 style={{fontSize:"42px", marginBottom:"20px"}}>Uber for HR</h1>
        <p style={{fontSize:"20px", lineHeight:"32px"}}>
          We help recruiters and hiring managers automate the entire hiring funnel.
          <br/><br/>
          <ul style={{fontSize:"18px", lineHeight:"28px"}}>
            <li>→ auto screen candidate resumes</li>
            <li>→ auto match resume with job description</li>
            <li>→ auto generate interview feedback forms</li>
            <li>→ track candidate pipeline in real time</li>
          </ul>
        </p>
      </div>

      {/* RIGHT SIDE LOGIN AREA */}
      <div style={{
        flex:1,
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        gap:"20px",
        background:"#fff",
        borderLeft:"1px solid #ddd"
      }}>

        <h2 style={{fontSize:"28px"}}>Login</h2>

        <button style={btnStyle} onClick={()=>alert("Google login coming soon")}>Login with Google</button>
        <button style={btnStyle} onClick={()=>alert("LinkedIn login coming soon")}>Login with LinkedIn</button>
        <button style={btnStyle} onClick={()=>alert("Github login coming soon")}>Login with Github</button>
        <button style={btnStyle} onClick={()=>alert("Email login coming soon")}>Login with Email</button>

        <button 
          style={{...btnStyle, background:"black", color:"white"}}
          onClick={()=> window.location.href = "/jobs"}
        >
          Continue →
        </button>

      </div>

    </div>
  );
}

const btnStyle: React.CSSProperties = {
  width:"260px",
  padding:"14px 20px",
  border:"1px solid black",
  borderRadius:"10px",
  fontSize:"18px",
  cursor:"pointer",
  background:"white"
};
