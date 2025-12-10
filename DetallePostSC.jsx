import React from 'react';
import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const DetallePost = () => {
  const { id } = useParams();
  const { 
    data: post, 
    loading: loadingPost, 
    error: errorPost 
  } = useFetch(`/api/posts/${id}`);

  const { 
    data: usuario, 
    loading: loadingUser 
  } = useFetch(post ? `/api/users/${post.userId}` : null);

  if (loadingPost) {
    return <p className="loading-state">Cargando detalles del post...</p>;
  }

  if (errorPost) {
    return (
      <div className="error-state">
        <Link to="/">← Volver al inicio</Link>
        <p>Error al cargar el post: {errorPost}</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="not-found-state">
        <Link to="/">← Volver al inicio</Link>
        <p>No se encontró el post.</p>
      </div>
    );
  }

  return (
    <div className="detalle-post-container">
      <Link to="/" className="back-link">← Volver a la lista de posts</Link>

      <article className="post-content">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </article>

      {loadingUser ? (
        <p className="loading-state">Cargando información del autor...</p>
      ) : (
        usuario && (
          <section className="info-usuario-post">
            <h2>Acerca del Autor</h2>
            <p>
              <strong>Nombre:</strong> {usuario.name}
            </p>
            <p>
              <strong>Email:</strong> {usuario.email}
            </p>
            <p>
              <strong>Username:</strong> @{usuario.username}
            </p>
          </section>
        )
      )}
    </div>
  );
};

export default DetallePost;