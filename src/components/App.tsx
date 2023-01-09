import React from 'react';
import '../styles/app.scss';
import WebFont from 'webfontloader';
import PulpFictionPoster from '../images/pulp-fiction.png';
import BohemianRhapsodyPoster from '../images/bohemian-rhapsody.png';
import KillBillVol2Poster from '../images/kill-bill-vol-2.png';
import AvengersPoster from '../images/avengers.png';
import InceptionPoster from '../images/inception.png';
import ReservoirDogsPoster from '../images/reservior-dogs.png';
import Page from './Utilities/Page';
import Header from './Header/Header';
import HeaderTop from './Header/HeaderTop';
import HeaderMain from './Header/HeaderMain';
import Footer from './Footer';
import Menu from './Menu/Menu';
import MovieList from './Movie/MovieList';
import LogoImage from '../images/netflixroulette.png';
import Container from './Utilities/Container';
import ErrorBoundary from './ErrorBoundary';

WebFont.load({
  google: {
    families: ['Montserrat:300,400,500,600,700', 'sans-serif'],
  },
});

const menu = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

const movies = [
  {
    id: 1,
    name: 'Pulp Fiction',
    genres: ['Action & Adventure'],
    image: PulpFictionPoster,
    releaseDate: '2008',
    runtime: '200 mins',
    rating: '7.8',
    overview:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non feugiat felis, in accumsan justo. Quisque enim leo, volutpat ac tempus eu, ullamcorper eu nulla. Duis sagittis convallis dolor ac ullamcorper. Nam fringilla venenatis sem gravida vulputate. Vestibulum sagittis eu elit sed rhoncus. Etiam blandit erat a augue auctor, ut vestibulum ligula posuere. Sed arcu quam, tristique non accumsan a, eleifend sed lorem. In nec augue et ante maximus rhoncus. Fusce at neque lorem. Pellentesque a gravida dolor. Nam ac molestie tortor. Donec at nunc ut purus rhoncus fermentum in et tortor. Mauris pulvinar non ligula non pharetra. Nullam diam nulla, vehicula sit amet fringilla quis, sodales vel magna. Cras nec nulla tempor, ullamcorper purus a, egestas ex. Nam semper scelerisque arcu, a malesuada tortor.',
  },
  {
    id: 2,
    name: 'Bohenmian Rhapsody',
    genres: ['Drama', 'Biography', 'Music'],
    image: BohemianRhapsodyPoster,
    releaseDate: '2008',
    runtime: '200 mins',
    rating: '7.8',
    overview:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non feugiat felis, in accumsan justo. Quisque enim leo, volutpat ac tempus eu, ullamcorper eu nulla. Duis sagittis convallis dolor ac ullamcorper. Nam fringilla venenatis sem gravida vulputate. Vestibulum sagittis eu elit sed rhoncus. Etiam blandit erat a augue auctor, ut vestibulum ligula posuere. Sed arcu quam, tristique non accumsan a, eleifend sed lorem. In nec augue et ante maximus rhoncus. Fusce at neque lorem. Pellentesque a gravida dolor. Nam ac molestie tortor. Donec at nunc ut purus rhoncus fermentum in et tortor. Mauris pulvinar non ligula non pharetra. Nullam diam nulla, vehicula sit amet fringilla quis, sodales vel magna. Cras nec nulla tempor, ullamcorper purus a, egestas ex. Nam semper scelerisque arcu, a malesuada tortor.',
  },
  {
    id: 3,
    name: 'Kill Bill: Vol 2',
    genres: ['Oscar winning Movie'],
    image: KillBillVol2Poster,
    releaseDate: '2008',
    runtime: '200 mins',
    rating: '7.8',
    overview:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non feugiat felis, in accumsan justo. Quisque enim leo, volutpat ac tempus eu, ullamcorper eu nulla. Duis sagittis convallis dolor ac ullamcorper. Nam fringilla venenatis sem gravida vulputate. Vestibulum sagittis eu elit sed rhoncus. Etiam blandit erat a augue auctor, ut vestibulum ligula posuere. Sed arcu quam, tristique non accumsan a, eleifend sed lorem. In nec augue et ante maximus rhoncus. Fusce at neque lorem. Pellentesque a gravida dolor. Nam ac molestie tortor. Donec at nunc ut purus rhoncus fermentum in et tortor. Mauris pulvinar non ligula non pharetra. Nullam diam nulla, vehicula sit amet fringilla quis, sodales vel magna. Cras nec nulla tempor, ullamcorper purus a, egestas ex. Nam semper scelerisque arcu, a malesuada tortor.',
  },
  {
    id: 4,
    name: 'Avengers: War of Infinity',
    genres: ['Action & Adventure'],
    image: AvengersPoster,
    releaseDate: '2008',
    runtime: '200 mins',
    rating: '7.8',
    overview:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non feugiat felis, in accumsan justo. Quisque enim leo, volutpat ac tempus eu, ullamcorper eu nulla. Duis sagittis convallis dolor ac ullamcorper. Nam fringilla venenatis sem gravida vulputate. Vestibulum sagittis eu elit sed rhoncus. Etiam blandit erat a augue auctor, ut vestibulum ligula posuere. Sed arcu quam, tristique non accumsan a, eleifend sed lorem. In nec augue et ante maximus rhoncus. Fusce at neque lorem. Pellentesque a gravida dolor. Nam ac molestie tortor. Donec at nunc ut purus rhoncus fermentum in et tortor. Mauris pulvinar non ligula non pharetra. Nullam diam nulla, vehicula sit amet fringilla quis, sodales vel magna. Cras nec nulla tempor, ullamcorper purus a, egestas ex. Nam semper scelerisque arcu, a malesuada tortor.',
  },
  {
    id: 5,
    name: 'Inception',
    genres: ['Action & Adventure'],
    image: InceptionPoster,
    releaseDate: '2008',
    runtime: '200 mins',
    rating: '7.8',
    overview:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non feugiat felis, in accumsan justo. Quisque enim leo, volutpat ac tempus eu, ullamcorper eu nulla. Duis sagittis convallis dolor ac ullamcorper. Nam fringilla venenatis sem gravida vulputate. Vestibulum sagittis eu elit sed rhoncus. Etiam blandit erat a augue auctor, ut vestibulum ligula posuere. Sed arcu quam, tristique non accumsan a, eleifend sed lorem. In nec augue et ante maximus rhoncus. Fusce at neque lorem. Pellentesque a gravida dolor. Nam ac molestie tortor. Donec at nunc ut purus rhoncus fermentum in et tortor. Mauris pulvinar non ligula non pharetra. Nullam diam nulla, vehicula sit amet fringilla quis, sodales vel magna. Cras nec nulla tempor, ullamcorper purus a, egestas ex. Nam semper scelerisque arcu, a malesuada tortor.',
  },
  {
    id: 6,
    name: 'Reservoir Dogs',
    genres: ['Oscar winning Movie'],
    image: ReservoirDogsPoster,
    releaseDate: '2008',
    runtime: '200 mins',
    rating: '7.8',
    overview:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non feugiat felis, in accumsan justo. Quisque enim leo, volutpat ac tempus eu, ullamcorper eu nulla. Duis sagittis convallis dolor ac ullamcorper. Nam fringilla venenatis sem gravida vulputate. Vestibulum sagittis eu elit sed rhoncus. Etiam blandit erat a augue auctor, ut vestibulum ligula posuere. Sed arcu quam, tristique non accumsan a, eleifend sed lorem. In nec augue et ante maximus rhoncus. Fusce at neque lorem. Pellentesque a gravida dolor. Nam ac molestie tortor. Donec at nunc ut purus rhoncus fermentum in et tortor. Mauris pulvinar non ligula non pharetra. Nullam diam nulla, vehicula sit amet fringilla quis, sodales vel magna. Cras nec nulla tempor, ullamcorper purus a, egestas ex. Nam semper scelerisque arcu, a malesuada tortor.',
  },
];

const App = () => (
  <Page>
    <Header>
      <HeaderTop />
      <HeaderMain />
    </Header>

    <div className="header-trim" />

    <Container>
      <Menu menu={menu} />

      <div className="separator" />

      <ErrorBoundary>
        <MovieList movies={movies} />
      </ErrorBoundary>
    </Container>

    <Footer>
      <img src={LogoImage} alt={LogoImage} />
    </Footer>
  </Page>
);

export default App;
