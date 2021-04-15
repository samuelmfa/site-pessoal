import certpro from '../assets/img/CertiProf-Badge-SFPC.png';
import react from '../assets/img/linguagem/react.png';
import java from '../assets/img/linguagem/spring.png';
import angular from '../assets/img/linguagem/angular.png';

export const cursos = [
    {
        id: 1,
        titulo: '  React com Redux',
        instituicao: 'Origamid',
        credencial: 'https://www.origamid.com/certificate/a067c64d/',
        imagem: react
    },
    {
        id: 2,
        titulo: 'Java - SpringBoot entre outros.',
        instituicao: 'Alura',
        credencial: 'https://cursos.alura.com.br/user/samuelmfa/fullCertificate/966b1ad890bbd3c51e471cfbea9c889a',
        imagem: java
    },
    {
        id: 3,
        titulo: 'Desenvolvimento Avançado em Angular',
        instituicao: 'desenvolvedor.io',
        credencial: 'https://desenvolvedor.io/certificados/32efd7f8-8430-473f-95af-099576829c87',
        imagem: angular
    },
    {
        id: 4,
        titulo: 'Scrum Professional',
        instituicao: 'Scrum Foundation Professional Certificate',
        credencial: 'https://www.credly.com/badges/dcabef93-c4bb-4b9e-9f5a-4ba4c2a8d51c?source=linked_in_profile',
        imagem: certpro
    }
]

export default cursos;