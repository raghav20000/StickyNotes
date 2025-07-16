import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Raghav. Repairs!</span></h1>
                <p>Your trusted tech repair partner</p>
            </header>
            <main className="public__main">
                <p>
                    📍 Nestled in the heart of <strong>Downtown Uchiha City</strong>, 
                    <span className="nowrap"> M Raghav. Repairs </span> is your one-stop destination 
                    for professional and reliable tech repair services.
                </p>
                <address className="public__addr">
                    <strong>Repair Shop by Raghav</strong><br />
                    25-104 IBM Colony<br />
                    Vijayawada, AP – 521456<br />
                    📞 <a href="tel:+917989397407">(7989) 397 407</a>
                </address>
                <br />
                <p><strong>Owner:</strong> M Sai Raghav</p>
            </main>
            <footer>
                <Link to="/login">🔐 Employee Login</Link>
            </footer>
        </section>
    )
    return content
}

export default Public