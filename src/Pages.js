import { Route , Switch} from 'react-router-dom';

import AllmeetupsPage from './pages/AllMeeetups';
import FavouritesPage from './pages/Favourites';
import NewMeetupPage from './pages/NewMeetup';
import Layout from './components/layout/Layout';


function Pages() {
    return (
    <Layout>
          
        <Switch>
         <Route path='/' exact>
           <AllmeetupsPage />
         </Route>
         <Route path='/new-meetup'>
           <NewMeetupPage />
         </Route>
         <Route path='/favourites'>
            <FavouritesPage />  
         </Route>
        </Switch> 
    </Layout>
    );
}
export default Pages;