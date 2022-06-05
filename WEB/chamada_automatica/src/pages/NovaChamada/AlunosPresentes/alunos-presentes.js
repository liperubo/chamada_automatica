import React from "react";
import Header from "../../../componentes/Header/header";
import Footer from "../../../componentes/Footer/footer";
import { Link } from "react-router-dom";
import './alunos-presentes.css';



export default function AlunosPresentes() {
    return (
        <>
        <Header />
        <article className="opcaoChamada" >
            <section className="novaChamada" id="formatacao">
                <p>
                    Nova chamada
                </p>
            </section>
            <section className="historicoChamada" id="formatacao">
                <p>
                    Histórico de chamadas
                </p>
            </section>
        </article>
        <article className="telaListaAlunos">
            <section className="sala" id="formatacao">
                <p>
                    UP013TIN1
                </p>
            </section>

            <section className="listaAlunos" id="formatacao" >
                <input type="checkbox"></input>
                <ul >
                    
                    <li>
                        <input type="checkbox"></input>
                        Alex Shoiti
                    </li>
                    <li>
                        <input type="checkbox"></input>
                        Felipe Eler
                    </li>
                    <li>Felipe Victorino</li>
                    <li>Gabriel Mancio</li>
                    <li>Laura Cecília</li>
                    <li>Matheus Patriarca</li>
                    <li>Rafael Lavagnini</li>
                </ul>
            </section>

            <section className="gerarQrCode">
                <Link to="/" className="Link" id="formatacao">Finalizar</Link>
            </section>

        </article>
        <Footer />
    </>
    )
}