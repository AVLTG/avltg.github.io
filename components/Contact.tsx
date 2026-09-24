import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    const linkStyle: React.CSSProperties = {
        fontSize: 36,
        textDecoration: "none",
        lineHeight: 0,
    };

    return (
        <>
            <p
                className="workSans"
                style={{
                    textAlign: "center",
                    fontSize: 20,
                    lineHeight: 1.7,
                }}
            >
                Feel free to check out my Github or LinkedIn, or shoot me an
                email if you want to chat!
            </p>
            <ul
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 32,
                    listStyle: "none",
                    marginTop: 32,
                }}
            >
                <li>
                    <a
                        href="https://www.github.com/avltg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link"
                        style={linkStyle}
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/amirali-tolooei"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link"
                        style={linkStyle}
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a
                        href="mailto:aa.tolooei@gmail.com"
                        className="contact-link"
                        style={linkStyle}
                        aria-label="Email"
                    >
                        <FaEnvelope />
                    </a>
                </li>
            </ul>
        </>
    );
}
