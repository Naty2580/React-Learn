
import { useState } from "react";

const  Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");



  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) { console.log("error here"); return;}
    setLoading(true);
    setError("");
 
    try{
    const res = await fetch(
      `https://api.github.com/users/${searchTerm}`
    );
    const data = await res.json();
    if (data) {
        setUsers(data);
        console.log(users)
      } else {
        setUsers({});
        setError("No users found.");
      }
    } catch (error) {
      setError("Failed to fetch data.");
      console.log(error)
    }

    setLoading(false);

  };

  return (
    <div style={styles.container}>
    
    <div style={styles.searchBar}>

     <form onSubmit={ (e) => handleSearch(e)} >
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e)=> handleChange(e)}
        style={styles.inp}
      />
      <button type="submit" style={styles.searchButton} > 🔎 </button>
      </form>
      </div> 
 

 <div> {loading && <p style={styles.loadingText}>Loading...</p>}</div>
 <div> {error && <p style={styles.loadingText}> {error}</p>} </div>
 <div style={styles.resultsContainer}>
 {users ? 
 <>
       <img src={users.avatar_url} alt="Avatar" style={styles.avatar} />

       <a href={users.html_url} target="_blank" rel="noopener noreferrer" style={styles.username}>
             {users.login}
        </a> 

        <div>
        <div style={styles.resultItem}>
    <span style={styles.label}>Name:</span>
    <span style={styles.value}>{users.name}</span>
  </div>

  <div style={styles.resultItem}>
    <span style={styles.label}>Followers:</span>
    <span style={styles.value}>{users.followers}</span>
  </div>

  <div style={styles.resultItem}>
    <span style={styles.label}>Following:</span>
    <span style={styles.value}>{users.following}</span>
  </div>

  <div style={styles.resultItem}>
    <span style={styles.label}>User joined on:</span>
    <span style={styles.value}>{new Date(users.created_at).toDateString()}</span>
  </div>

  <div style={styles.resultItem}>
    <span style={styles.label}>Public Repos:</span>
    <span style={styles.value}>{users.public_repos}</span>
  </div>
</div>
      
      </>
      :  <p style={styles.noResults}>No results found</p>
}
</div>
    </div>
  );
}

// Inline Styles
const styles = {
  container: {
    width: "84vw",
    height: "100vh",
    backgroundColor: "black",
  },
  searchBar: {
    width: "90%",
    minWidth: "100px",
    margin:" 0 auto",
    padding: "12px 5px",
    fontSize: "18px",
    borderRadius: "8px",
    backgroundColor: "black",
    transition: "border-color 0.3s ease",
  },
  inp : {
     width: "80%",
     height: "4vh",
     outline: "none",
     border: "2px solid coral",
     color : "cyan",
     borderRadius : "7px",
     backgroundColor: "rgba(255,255,255,0.2)",
     
     
  },
 
  resultsContainer: {
    margin: "20px auto",
    width: "70%",
    height:"65%",
    backgroundColor: "rgba(255, 255, 255, 0.17)", 
    borderRadius: "8px",
    padding: "5%",
    boxShadow: "-3px 3px 20px rgba(0, 255, 255, 0.3)", 
    display: "flex",
    flexDirection:"column",
    rowGap : "1rem",
  },
  resultItem: {
    display: "flex",
    justifyContent: "space-between", // Align left and right
    alignItems: "center",
    width: "100%",
    padding: "12px",
    borderBottom: "1px solid coral",
    fontSize: "18px",
    transition: "background-color 0.3s ease",
  },
  label: {
    fontWeight: "bold",
    color: "coral",
    textTransform: "uppercase",
  },
  value: {
    color: "cyan",
    fontWeight: "500",
  },
  noResults: {
    color: "gray",
    textAlign: "center",
    fontSize: "16px",
  },
  loadingText: {
    color: "coral",
    textAlign: "center",
    fontSize: "16px",
  },
  searchButton: {
    width: "40px",
    height: "40px",
    border: "5px solid coral",
    backgroundColor: "cyan",
    color: "coral",
    borderRadius: "50%",
    padding: "5px",
    transition: "border-color 0.3s ease",
    float: "right"
  },
  avatar: {
    width: "10vw",
    height: "10vw",
    borderRadius: "50%",
    marginBottom: "10px",
    border: "2px solid coral",
    alignSelf : "center"
    

  },
};

// Add animations
styles.inp[":focus"] = { border: "3px solid coral" };
styles.resultItem[":hover"] = { backgroundColor: "rgba(255, 127, 80, 0.5)" };

export default Search;
