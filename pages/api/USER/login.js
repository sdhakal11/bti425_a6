import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Extract the username and password from the request body
    const { username, password } = req.body;

    // Here, you'll need to check the user credentials. This will depend on how you're storing user data.
    // For now, let's assume you have a `checkUser` function that does this for you.
    let user = await checkUser(username, password);

    if (user) {
      // If the user credentials are valid, create a payload for the JWT
      let payload = {
        _id: user._id,
        username: user.username
      };

      // Sign the payload and create the JWT
      let token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

      // Send the JWT to the client
      res.status(200).json({ message: 'Authentication successful', token: token });
    } else {
      // If the user credentials are not valid, send an error message
      res.status(401).json({ message: 'Authentication failed' });
    }
  } else {
    // If the request method is not POST, send an error message
    res.status(405).json({ message: 'Method not allowed' });
  }
}
