export function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;

  return (
    <>
      <div id={id} className='card-movie'>
        <div className='col s12 m7'>
          <div className='card'>
            <div className='card-image'>
              {poster === "N/A" ? (
                <img
                  src={`https://via.placeholder.com/300x410?text=${title}`}
                />
              ) : (
                <img src={poster} />
              )}
            </div>
            <div className='card-content'>
              <span className='card-title'>{title}</span>
              <p>
                {year} <span className='right'>{type}</span>
              </p>
            </div>
            <div className='card-action'>
              <a href='#'>Movie Plot</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
