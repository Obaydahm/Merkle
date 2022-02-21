import { Navigate, Link } from "react-router-dom";
import { useStoriesProvider } from "../../providers/StoriesContext";
import "./StoryPage.style.scss";
const StoryPage = () => {
  const { selectedStory } = useStoriesProvider();

  if (selectedStory === undefined) return <Navigate to="/" />;

  const date: Date = new Date(selectedStory.time * 1000);

  return (
    <>
      <Link to="/">
        <div className="topBar">Back</div>
      </Link>
      <div className="container">
        <img
          className="story-image"
          src="https://picsum.photos/1200/200"
          alt="story"
        />
        <div className="text">
          <div className="story-title">{selectedStory.title}</div>
          <div className="info">
            {`Author: ${selectedStory.author.id}`}
            {` - Author score: ${selectedStory.author.karma}`}
            {` - Time: ${date.toDateString()}`}
          </div>
          <div className="story">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis
            eros at dolor rutrum euismod. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Cras dui augue, posuere vitae tincidunt
            sed, hendrerit ac risus. Ut sollicitudin, lorem vitae interdum
            auctor, nulla tortor blandit magna, et porttitor nisl lacus et orci.
            Quisque venenatis tempus posuere. Maecenas tincidunt nunc vitae
            velit vehicula bibendum. Aenean lobortis libero malesuada facilisis
            facilisis. Aenean eget ipsum purus. Nulla aliquet metus id purus
            molestie tempus id vel justo. Mauris cursus consectetur nulla at
            pharetra. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Suspendisse tortor tortor,
            dapibus nec porta ut, varius nec nisl. Sed sem augue, commodo ut
            felis at, placerat semper ante. Suspendisse ac nibh eu magna finibus
            rhoncus. Pellentesque eu risus sit amet risus commodo suscipit non
            ut tellus. Duis a dapibus neque. Donec quam leo, eleifend vel
            fringilla non, rhoncus eu nisl. Mauris consequat laoreet interdum.
            Cras tempor augue non nunc viverra semper. Nulla facilisi.
            Pellentesque vitae gravida nulla. Nulla facilisi. Suspendisse non
            ligula in odio maximus rhoncus ut sed turpis. Suspendisse a sodales
            quam. Praesent fermentum turpis sit amet tortor molestie, quis
            egestas urna pretium. Maecenas ut quam in ligula iaculis interdum
            sit amet nec ex. Mauris consectetur tempus vestibulum. Sed consequat
            ipsum sit amet nulla placerat gravida. Ut in vestibulum turpis.
            Quisque quis cursus massa, et congue diam. Ut rutrum lectus in
            bibendum porttitor. Sed a justo placerat, semper orci sit amet,
            tincidunt leo. Aenean pharetra odio eu faucibus elementum.
            Suspendisse rutrum justo in tortor pharetra, eu venenatis mi
            rhoncus. Vestibulum elit ante, aliquam ac luctus pretium, lacinia a
            velit. Quisque ultrices quam libero, vitae suscipit lacus tincidunt
            vitae. Quisque eu mi egestas, mattis lorem quis, semper augue.
            Quisque efficitur porttitor est, sodales vehicula neque finibus
            quis. Suspendisse vel libero id velit faucibus volutpat a varius
            dui. Integer quis velit nec ipsum vulputate fringilla vitae semper
            mauris. Maecenas dapibus pellentesque leo et vestibulum. Vivamus
            cursus bibendum sem et fringilla. Mauris eleifend dictum erat,
            rutrum blandit neque aliquam vitae. Aliquam purus libero, aliquam
            vel eros eu, lobortis tempor risus. Aliquam consequat id dui sit
            amet blandit. Etiam augue mauris, tristique ut tincidunt nec,
            facilisis vitae mi. Nam scelerisque vehicula ante, eu ultricies
            neque fermentum in. Vestibulum lorem odio, egestas at viverra
            maximus, egestas sit amet enim. Quisque interdum at augue id
            consequat. Aenean eros neque, facilisis sit amet enim et, pretium
            congue tellus. Nulla sed nibh eu lorem eleifend dapibus sed ut nunc.
            Nullam at aliquet ex, vel dignissim ipsum. Quisque faucibus lorem
            justo, et tincidunt neque cursus in. Maecenas euismod blandit
            ligula, nec hendrerit neque hendrerit ac.
          </div>
        </div>
      </div>
    </>
  );
};
export default StoryPage;
