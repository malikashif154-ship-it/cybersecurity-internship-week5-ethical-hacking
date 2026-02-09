const query = "SELECT * FROM users WHERE email = ? AND password = ?";
db.query(query, [req.body.email, req.body.password]);
