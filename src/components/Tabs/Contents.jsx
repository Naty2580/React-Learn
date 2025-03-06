const Contents = [
    {
      id: 1,
      title: "Home",
      content: () => <h1>Welcome to the Homepage!</h1>
    },
    {
      id: 2,
      title: "Profile",
      content: () => <p>This is your profile page. Edit your details here.</p>
    },
    {
      id: 3,
      title: "Settings",
      content: () => <button>Change Settings</button>
    },
    {
      id: 4,
      title: "Dashboard",
      content: () => <div style={{ background: 'lightblue', padding: '10px',color: 'black' }}>Dashboard Stats</div>
    },
    {
      id: 5,
      title: "Notifications",
      content: () => <ul><li>New Message</li><li>Update Available</li></ul>
    },
    {
      id: 6,
      title: "About",
      content: () => <p>About us: We build awesome apps!</p>
    },
    {
      id: 7,
      title: "Contact",
      content: () => <form onSubmit={(e) => {e.preventDefault() ; alert("message sent")}}><input type="text" placeholder="Your message" /><button type="submit">Send</button></form>
    },
    {
      id: 8,
      title: "Gallery",
      content: () => ( <div style={{ backgroundColor: "rgba(255,255,255,0.1)", padding: '20px', textAlign: 'center' }}>
        <img
          src="https://pngimg.com/uploads/hello/hello_PNG4.png"
          alt="Hello Greeting"
          style={{ width: '150px', height: 'auto' }}
        />
      </div>)
    },
    {
      id: 9,
      title: "FAQ",
      content: () => <details><summary>Click me</summary><p>Here is the answer to your question.</p></details>
    },
    {
      id: 10,
      title: "Support",
      content: () => <div>Contact our support team at support@example.com</div>
    }
  ];
  
  export default Contents;
  