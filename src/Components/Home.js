import '../Home.css'

export default function Home () {
 return(
     <div>
               <h1>Welcome to Whole Me!</h1>
      <div className='homepage'>

       <img className='homepage_image' src='Images/mock-home.png' alt='weightlifter'></img>
      </div>
      <div className='homepage_text'>
       <h2>Why We Do It</h2>
       <p>
        Whole Me is a daily wellness journal. Wellness isn't just about the body. Whole wellness includes the mind.

        This app is intended to help keep you on track to becoming the BEST version of you!

        The first thing you will find when you log in, is a daily inspiration quote to remind you just how amazing you are!

        Next naviagate to your daily gratitude page to implament your gratitude practice.

        Then select from some popular workouts to keep your body fit and strong!
            Track your progess and workouts on the tracking page.
            Pin your favorites on the My Workouts tab

        Keep your body healthy and your taste buds tingling with a tantalizing recipe from one of the many popular websites listed on our recipes page.
            Pin your favorites on the My Recipes tab

        When you need a pick-me-up, a good laugh, or a remonder of just how blessed you truly are, navigate over to your My Inspiration tab where you can keep images, quotes, jokes, links, etc to anything that brings you joy!

       </p>
       
      </div>
     </div>
 )
}