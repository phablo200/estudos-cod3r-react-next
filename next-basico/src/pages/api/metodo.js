const defaultRoute = (req, res) => {
    if (req.method === 'GET') {
        res.status(200).json({
            nome: 'Pedo'
        });
    } else {
        res.status(200).json({
            nome: 'Maria'
        });
    }
    
}

export default defaultRoute;