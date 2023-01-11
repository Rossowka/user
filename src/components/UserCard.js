import React from 'react';

function UserCard({ onClose, user }) {
    const styles = {
        overlay: {
            height: '100vh',
            width: '100vw',
            position: 'absolute',
            top: '0',
            left: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex'
        },
        dialog: {
            backgroundColor: 'white',
            padding: '25px 50px 50px 50px',
            height: 'auto',
            width: 'fit-content',
            margin: 'auto'
        },
        h4: {
            margin: '0',
            marginTop: '50px',
        },
        button: {
            width: '30px',
            height: '30px',
            float: 'right',
        }
    }

    console.log(user);
    return (
        <div style={styles.overlay}>
            <div style={styles.dialog}>
                <button style={styles.button} onClick={onClose}>X</button>
                <h4 style={styles.h4}>Name: {user.name}</h4>
                <p>Username: {user.username}</p>
                <div>
                    <p>Company: {user.company.name}</p>
                    <p>Quote: {user.company.catchPhrase}</p>
                    <p>E-mail: {user.email}</p>
                    <p>Mobile: {user.phone}</p>
                    <p>Website: {user.website}</p>
                </div>
            </div>
        </div>
    );
};

export default UserCard;