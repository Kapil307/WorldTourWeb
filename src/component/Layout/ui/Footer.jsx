import footerContact from "../../../api/FooterApi.json";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export const Footer = () => {
    // mapping icons with names from JSON
    const footerIcons = {
        MdPlace: <MdPlace />,
        IoCallSharp: <IoCallSharp />,
        TbMailPlus: <TbMailPlus />
    };

    return (
        <footer className="footer-section">
            <div className="container grid grid-three-cols">
                {footerContact.map((curData, index) => {
                    const { icon, tittle, details } = curData;
                    return (
                        <div className="footer-contact" key={index}>
                            <div className="icon">{footerIcons[icon]}</div>
                            <div className="footer-contact-text">
                                <p>{tittle}</p>
                                <p>{details}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="copyright-area">
                <div className="container">
                    <div className="grid grid-two-cols">
                        <div className="copyright-text">
                            <p>
                                Copyright &copy; 2025, All Right Reserved
                                <NavLink to="#">KapilTreveles</NavLink>
                            </p>
                        </div>
                        <div className="footer-menu">
                            <ul>
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>

                                <li>
                                    <NavLink to="https://www.instagram.com/kuldeepgharrot/" target="_blank">Socal
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
