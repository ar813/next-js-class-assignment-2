import footerStyle from "./footer.module.css"

export default function Footer(){
    return(
        <footer className={footerStyle.footer}>
            <h1>Contact us</h1>
            <p>Contact No: 00203902912</p>
            <p>Email: 123@example.com</p>
            <p>Address: Karachi, Pakistan</p>
            <p>Developed by Muhammad Arsalan Khan</p>
        </footer>
    )
}