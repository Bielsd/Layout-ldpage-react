import React, { Component } from 'react';
import './Page.css';
import Face from './img/Face.png';
import Google from './img/Google.png';


class Page extends Component {
    render() {
        return (
            <section className="mae">
                <div className="modal">

                    <div className="esquerda" >
                        <h1>O que é o Bivaque Camping</h1>
                        <p className="text">É uma plataforma feita especialmente para campistas
                        e não campistas, no caso pessoas que se interessam
                        porém não tem muito conhecimento sobre o assunto.
                        </p>
                        <h4>- Para que serve a plataforma?</h4>
                        <p className="text">Serve como guia de locais para camping para quem
                        se interessar por novas aventuras e  experiências.</p>
                        <h4>- Quero acampar mas não confio em info de sites, o que faço?</h4>
                        <p className="text">A equipe Bivaque se orgulha de seu desempenho,
                        pois busca manter constantemente atualizadas e verificadas as informações disponíveis,
                         para que o usuário possa ter segurança e um leque maior de possibilidades.
                                             </p>
                        <h4>Dicas e guia</h4>
                        <p className="text">O bivaque camping também fornece ao usuário não experiente um pequeno 
                        guia informativo on-line sobre a pratica do acampamento, equipamentos necessários, algumas dicas sobre improviso
                        e noções de primeiros socorros, para que todos possam ter uma experiência incrível. </p>
                        <h4>Se interessou pela plataforma ? 
                            Corre no <a className="bvksite" href="">Bivaque Camping</a> e encontre uma experiencia inesquecível!</h4>
                    </div>
                    <div className="direita">
                        <h1>Conheça o Bivaque</h1>
                        <p className="cadastre">Cadastre seu email</p>
                        <a href="#" className="gosite" type="submit">Ir para o site</a>
                        <p className="ou">Ou</p>
                        <p  className="cadastre">Cadastre  suas redes sociais</p>
                        <div className="wface"><a href=""><img src={Face} /><p>Entrar com Facebook</p></a></div>
                        <div className="wgoogle"><a href=""><img src={Google} /><p>Entrar com Google</p></a></div>
                    </div>

                </div>
            </section>

        );
    }
}

export default Page;
