import jwt from 'jsonwebtoken';

const adminCredentials = [
    {
        email: 'atifshah123@gmail.com',
        password: 'atif123',
    },
    {
        email: 'atifshah2@gmail.com',
        password: 'atif321',
    }
];

const secretKey = 'myRandomSecretKey123';

export const postlogin = (req, res) => {
    const { email, password } = req.body;

    const validAdmin = adminCredentials.find(admin => admin.email === email && admin.password === password);

    if (validAdmin) {
        // Successful login, generate and send a JWT token
        const token = jwt.sign({ email: validAdmin.email }, secretKey, {
            expiresIn: '10h',
        });
        console.log(token);
        res.send({ token });
    } else {
        // Login failed
        res.status(401).send('Login failed');
    }
};
