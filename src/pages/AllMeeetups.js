import MeetupList from "../components/Meetups/MeetupList";

const DUMMY_DATA = [
    {
        id: 'a1',
        title: 'Enjoy the best Services',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/c2/86/0e/caption.jpg?w=700&h=500&s=1',
        address: 'Paris',
        description: 'The best number one spot to enjoy your Honeymoon'
    },

    {
        id: 'a2',
        title: 'Enjoy the best Services',
        image: 'https://www.travelodge.co.uk/sites/default/files/styles/c12/public/GB0913_LONDON_CENTRAL_CITY_RD_EXTERIOR_2208.jpg',
        address: 'Central City',
        description: 'The best number one spot to enjoy your Honeymoon'
    },

    {
        id: 'a3',
        title: 'Enjoy the best Services',
       image: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2021/10/05/149803.jpg',
        address: 'France',
        description: 'The best number one spot to enjoy your Honeymoon'
    }
]

function AllmeetupsPage(){
    return <section>
        <h1>All Meetups</h1>
       <MeetupList meetups={DUMMY_DATA}/>
    </section>;
}
export default AllmeetupsPage;