

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
    
  <aside>
   <img className='w-10' src="https://i.ibb.co/pjsQ1kv/c-logo.png" alt="" />
    <p>Consultation Services by Doctors Ltd.<br/>Providing reliable tech since 1992</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Add Service
</a>
    <a className="link link-hover">Manage Service</a>
    <a className="link link-hover">Booked-Services</a>
    <a className="link link-hover">Service-To-Do</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Services</a>
    <a className="link link-hover">Dashboard</a>
    <a className="link link-hover">Log-in</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
  );
};

export default Footer;