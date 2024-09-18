const WorkItems = ({ item }) => {
    return (
      <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className="work__img" />
        <h3 className="work__title">{item.title}</h3>
        <ul className="work__tech">
          {item.techContent.map((tech, index) => (
            <li key={index} className="work__tech-content">{tech}</li>
          ))}
        </ul>
        <p className="work__desc">{item.description}</p>
        <a href={item.demoLink} target="_blank" rel="noopener noreferrer" className="work__button">
        Explore<i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      </div>
    );
  };
  
  export default WorkItems;