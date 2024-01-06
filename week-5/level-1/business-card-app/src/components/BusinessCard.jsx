export function BusinessCard({bCard}) {
    let count=1;
    return <div style={styles.card}>
        {bCard.map((card)=>{
            return <div>
                <h2 style={styles.name}>{count++}.  {card.name}</h2>
                <p style={styles.description}>{card.description}</p>
                <h3 style={styles.interestsHeader}>Interests</h3>
                <ul style={styles.interestsList}>
                    {card.interests.map((item)=>{
                    return <li key={item} style={styles.interestItem}>
                        {item}
                    </li>
                    
                })}</ul>
                <div style={styles.socialLinks}>                
                    <a href={card.links.linkedin} target="_blank" rel="noopener noreferrer" style={{...styles.link, marginLeft: '0px'}}>
                        LinkedIn
                    </a>
                    <br />
                    <a href={card.links.twitter} target="_blank" rel="noopener noreferrer" style={styles.link}>
                        Twitter
                    </a>
                </div>
                <hr />
            </div>
        })}
        
    </div>
}

const styles = {
    card: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      margin: '20px',
      maxWidth: '400px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f8f9fa'
    },
    name: {
      fontSize: '24px',
      marginBottom: '10px',
      color: '#333',
    },
    description: {
      fontSize: '16px',
      color: '#555',
      marginBottom: '15px',
    },
    socialLinks: {
      display: 'flex',
      marginBottom: '15px',
    },
    link: {
      textDecoration: 'none',
      color: '#fff', // Text color
      padding: '10px 15px', // Padding for the button
      borderRadius: '5px', // Border radius for rounded corners
      backgroundColor: '#007BFF', // Background color for the button
      display: 'inline-block', // Display as inline-block to be side by side
      margin: '10px', // Margin between buttons
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle lift
    },
    interestsHeader: {
      fontSize: '18px',
      marginBottom: '10px',
      color: '#333',
    },
    interestsList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    interestItem: {
      fontSize: '14px',
      marginBottom: '5px',
      color: '#555',
    },
  };