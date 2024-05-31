import { useEffect, useState } from "react";


const Footer = () => {

  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear((new Date()).getFullYear());
  }, [])

  return (
    <div className="footer">
      <div className="cont">
        <footer >
          <p className="text">
          © { year } Created with 💖
          by
          <a className="footer" href="https://github.com/sofimelania" target="_blank" rel="noreferrer">
           💙💛 Svitlana Syrnyk
          </a> 
          </p>
        </footer>
      </div>
    </div>
  )
}

export default Footer;