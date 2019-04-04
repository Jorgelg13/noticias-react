import React from 'react';

const Noticia = (props) => {

    const {urlToImage,url,title,description,source} = props.noticia;
    const imagen = (urlToImage)
    ?
      <div className="card-image">
        <img src={urlToImage} alt={title}/>
        <span className="card-title">{source.name}</span>
     </div>
    : '';

    return (
        <div className="col s6 l4 m6">
            <div className="card">
               {imagen}
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a href={url} target="_blank" className="waves-effects waves-light btn">
                        Noticia Completa
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Noticia;