import React, { useState, Component } from 'react';
import { Form, Modal} from 'react-bootstrap';

//CSS
import '../../assets/css/TopNavBar.css';

//Images, Icones
import { FaQuestion } from 'react-icons/fa';
import Logo from '../../assets/img/logo/logoSombre.png';
import LogoModal from '../../assets/img/logo/logoResponsive.png';
import iconSolaire from '../../assets/img/iconSolaire.png';


export default class TopNavBar extends Component {
    render()
    {
        return (
            <div className="backgroundTopNavBar">
                <img src={Logo} className="imgTopNavBar" alt="ressourcesRelationnelles" />
                <div className="positionButtonConnexionInscription">
                    <img src={iconSolaire} className="iconSolaireTopNavBar" alt="ressourcesRelationnelles" />
                    <ButtonInscription/>
                    <ButtonConnexion text="Se Connecter" />
                    <InterrogationPoint />
                </div>
            </div>
        );
    }
}

function ButtonInscription() {
    const [indexTabs , setIndexTabs] = useState(1);
    const indexTabsContent = (index) => {
            setIndexTabs(index);
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="parentButtonPositionInscriptionTopNavBar">
            <button className="buttonInscription" onClick={handleShow}>S'inscrire</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header  closeButton>
                    <img src={LogoModal} alt="Logo ressource relationelles" className="logoModal" />
                    <Modal.Title className={indexTabs === 1 ? 'activeContent centerTitle' : 'content'}>S'inscrire a RE</Modal.Title>
                    <Modal.Title className={indexTabs === 2 ? 'activeContent  centerTitle' : 'content'}>Se connecter a RE</Modal.Title>
                    <div className="positionBoutonInscriptionConnexion" >
                        <a className={indexTabs === 1 ? 'activeText col-6' : 'col-6 btnTopNavBarInsCon'} onClick={() =>  indexTabsContent(1) }>S'inscrire </a>
                        <a className={indexTabs === 2 ? 'activeText col-6' : 'col-6 btnTopNavBarInsCon'} onClick={() =>  indexTabsContent(2) }>Se connecter </a>
                    </div>
                </Modal.Header>

                <Modal.Body className={indexTabs === 1 ? 'activeContent' : 'content'}>
                    <Form>
                        <Form.Group controlId="formInscriptionPseudo">
                            <Form.Label>
                                Pseudonyme
                            </Form.Label>
                                <Form.Control  type="text" placeholder="Entrez un pseudonyme"/>
                        </Form.Group>

                        <Form.Group  controlId="formInscriptionName">
                            <Form.Label >
                                Nom
                                </Form.Label>
                                <Form.Control type="text" placeholder="Entrez votre nom"/>
                        </Form.Group>
                        <Form.Group  controlId="formInscriptionPrenom">
                            <Form.Label >
                                Prénom
                                </Form.Label>
                                <Form.Control type="text" placeholder="Entrez votre prénom"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Date de naissance</Form.Label>
                                <Form.Control type="date"/>
                        </Form.Group>
                        <Form.Group controlId="formInscriptionEmail">
                            <Form.Label >
                                E-mail
                            </Form.Label>
                                <Form.Control type="email" placeholder="Entrez une adresse mail valide" />
                        </Form.Group>
                        <Form.Group controlId="formInscriptionPassword">
                            <Form.Label >
                                Mot de passe
                            </Form.Label>
                            <Form.Control type="password" placeholder="Choissisez un mot de passe " />
                            <Form.Text id="passwordHelpBlock" muted>
                                Your password must be 8-20 characters long, contain letters and numbers, and
                                    must not contain spaces, special characters, or emoji.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group  controlId="formInscriptionPasswordConfirm">
                            <Form.Label >
                                Confirmez votre mot de passe
                            </Form.Label>
                            <Form.Control type="password" placeholder="Confirmer un mot de passe " />
                        </Form.Group>
                        En cliquant sur s'inscrire ,vous reconnaissez avoir lu et approuvé  les <a>Conditions d'utilisations</a> et la <a>Politique de confidentialité</a> .
                    </Form>
                </Modal.Body>

                <Modal.Body className={indexTabs === 2 ? 'activeContent' : 'content'}>
                    <Form className="fullWidthForm">
                        <Form.Group  controlId="formConnexionID">
                            <Form.Label >
                                Identifiant
                            </Form.Label>
                                <Form.Control type="text"/>
                        </Form.Group>

                        <Form.Group  controlId="formConnexionPassword">
                            <Form.Label >
                                Mot de passe
                                </Form.Label>
                                <Form.Control type="password"/>
                                <Form.Text>Mot de passe oublié ?</Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <div  className={indexTabs === 1 ? 'activeContent btnModal' : 'content btnModal'} onClick={handleClose}>S'inscrire</div>
                    <div className={indexTabs === 2 ? 'activeContent btnModal' : 'content btnModal'} onClick={handleClose}>Se Connecter</div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

function ButtonConnexion(props) {
    
        
        const [indexTabs , setIndexTabs] = useState(2);
        const indexTabsContent = (index) => {
                setIndexTabs(index);
        }
    
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    
        return (
            <div className="parentButtonPositionInscriptionTopNavBar">
                <button className="leftNavBar-bouton buttonConnexion" onClick={handleShow} >{props.text}</button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <img src={LogoModal} alt="Logo ressource relationelles" className="logoModal"/>
                        <Modal.Title className={indexTabs === 1 ? 'activeContent  centerTitle' : 'content'}>S'inscrire a RE</Modal.Title>
                        <Modal.Title className={indexTabs === 2 ? 'activeContent  centerTitle' : 'content'}>Se connecter a RE</Modal.Title>
                        <div className="positionBoutonInscriptionConnexion" >
                            <a className={indexTabs === 1 ? 'activeText col-6' : 'col-6 btnTopNavBarInsCon'} onClick={() =>  indexTabsContent(1) }>S'inscrire </a>
                            <a className={indexTabs === 2 ? 'activeText col-6' : 'col-6 btnTopNavBarInsCon'} onClick={() =>  indexTabsContent(2) }>Se connecter </a>
                        </div>
                        
                    </Modal.Header>
    
                    <Modal.Body className={indexTabs === 1 ? 'activeContent' : 'content'}>
                        <Form>
                            <Form.Group controlId="formInscriptionPseudo">
                                <Form.Label>
                                    Pseudonyme
                                </Form.Label>
                                    <Form.Control  type="text" placeholder="Entrez un pseudonyme"/>
                            </Form.Group>
    
                            <Form.Group  controlId="formInscriptionName">
                                <Form.Label >
                                    Nom
                                    </Form.Label>
                                    <Form.Control type="text" placeholder="Entrez votre nom"/>
                            </Form.Group>
                            <Form.Group  controlId="formInscriptionPrenom">
                                <Form.Label >
                                    Prénom
                                    </Form.Label>
                                    <Form.Control type="text" placeholder="Entrez votre prénom"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Date de naissance</Form.Label>
                                    <Form.Control type="date"/>
                            </Form.Group>
                            <Form.Group controlId="formInscriptionEmail">
                                <Form.Label >
                                    E-mail
                                </Form.Label>
                                    <Form.Control type="email" placeholder="Entrez une adresse mail valide" />
                            </Form.Group>
                            <Form.Group controlId="formInscriptionPassword">
                                <Form.Label >
                                    Mot de passe
                                </Form.Label>
                                <Form.Control type="password" placeholder="Choissisez un mot de passe " />
                                <Form.Text id="passwordHelpBlock" muted>
                                    Your password must be 8-20 characters long, contain letters and numbers, and
                                        must not contain spaces, special characters, or emoji.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group  controlId="formInscriptionPasswordConfirm">
                                <Form.Label >
                                    Confirmez votre mot de passe
                                </Form.Label>
                                <Form.Control type="password" placeholder="Confirmer un mot de passe " />
                            </Form.Group>
                            En cliquant sur s'inscrire ,vous reconnaissez avoir lu et approuvé  les <a>Conditions d'utilisations</a> et la <a>Politique de confidentialité</a> .
                        </Form>
                    </Modal.Body>
    
                    <Modal.Body className={indexTabs === 2 ? 'activeContent' : 'content'}>
                        <Form className="fullWidthForm">
                            <Form.Group  controlId="formConnexionID">
                                <Form.Label >
                                    Identifiant
                                </Form.Label>
                                    <Form.Control type="text"/>
                            </Form.Group>
    
                            <Form.Group  controlId="formConnexionPassword">
                                <Form.Label >
                                    Mot de passe
                                    </Form.Label>
                                    <Form.Control type="password"/>
                                    <Form.Text>Mot de passe oublié ?</Form.Text>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer >
                        <div className={indexTabs === 1 ? 'activeContent btnModal' : 'content btnModal'} onClick={handleClose}>S'inscrire</div>
                        <div className={indexTabs === 2 ? 'activeContent btnModal' : 'content btnModal'} onClick={handleClose}>Se Connecter</div>
                    </Modal.Footer>
                    
                </Modal>
            </div>
    )
}

function InterrogationPoint(props) {
    return (
        <FaQuestion className="interrogationPointTopBar" />
    )
}