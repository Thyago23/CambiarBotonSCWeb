import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const ListaPosts = () => {
  const { data: posts, loading, error } = useFetch("/api/posts");
  const { data: usuarios } = useFetch("/api/users");

  const [filtroUsuarioId, setFiltroUsuarioId] = useState("");

  if (loading) {
    return <p className="loading-state">Cargando la lista de posts...</p>;
  }

  if (error) {
    return (
      <div className="error-state">
        <p>Error al cargar los posts: {error}</p>
      </div>
    );
  }

  if (!posts) {
    return null; 
  }

  const postsFiltrados = useMemo(() => {
    if (!filtroUsuarioId) {
      return posts;
    }
    const userIdToFilter = Number(filtroUsuarioId);
    return posts.filter((p) => p.userId === userIdToFilter);
  }, [posts, filtroUsuarioId]);

  return (
    <div className="posts-page-container">
      <header>
        <h1>Galería de Posts</h1>
      </header>

      <section className="filtro-container">
        <label htmlFor="user-filter">Filtrar por Autor:</label>
        <select
          id="user-filter"
          value={filtroUsuarioId}
          onChange={({ target: { value } }) => setFiltroUsuarioId(value)} 
        >
          <option value="">-- Mostrar Todos los Autores --</option>
          {usuarios?.map((u) => (
            <option key={u.id} value={u.id}>
              {u.name}
            </option>
          ))}
        </select>
      </section>

      <main className="posts-list-grid">
        {postsFiltrados.length > 0 ? (
          postsFiltrados.map((post) => (
            <article key={post.id} className="post-summary-card">
              <h2>{post.title}</h2>
              <p>{post.body?.substring(0, 100)}...</p>
              <Link to={`/posts/${post.id}`} className="read-more-link">
                Ver Detalles
              </Link>
            </article>
          ))
        ) : (
          <p className="no-results-message">
            No se encontraron posts para el autor seleccionado.
          </p>
        )}
      </main>
    </div>
  );
};

export default ListaPosts;