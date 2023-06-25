import "./contactUs.css"

export function ContactPage() {
  return (
    <>
      <header className="header">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Designs</a>
        <a href="#">Contact us</a>
      </header>

      <div className="title">
        <h1>Welcome to contact us page</h1>
          <p>Fill the below form to contact us</p>
      </div>

      <form className="form">
        <h2>Contact us now!</h2>
        <hr />
        <div>
          <label>Name</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Email</label>
          <input type="email"></input>
        </div>
        <div>
          <label>Message</label>
          <textarea type="textbox" cols={50} rows={4}></textarea>
        </div>
        <button>Submit</button>
      </form>

      <footer className="footer">
        <p>copyright &copy; 2023 </p>
      </footer>
    </>
  )
}
