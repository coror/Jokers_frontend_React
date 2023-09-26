import React from 'react';
import classes from '../userScore/LeaderboardUser.module.css';
import Card from '../../UI/Card';

const LeaderboardUserYearly = (props) => {
   // Check if userGroup is an array
   const userGroups = Array.isArray(props.userGroup) ? props.userGroup : [props.userGroup];

   return (
     <Card className={classes['user-card']}>
       <div className={classes['user__info']}>
         <div className={classes['rank']}>{props.rank}</div>
         <div className={classes['leaderboard-image']}>
           <img src={props.userAvatar} alt={`Avatar of ${props.userName}`} />
         </div>
         <div className={classes['user__description']}>
           <h2 className={classes['user__name']}>{props.userName}</h2>
           <div className={classes['user__title']}>{props.userTitle}</div>
         </div>
         <div className={classes['user__score-container']}>
           <div className={classes['user__score']}>{props.yearlyScore}</div>
         </div>
         <div className={classes['user__group-container']}>
           {/* Map userGroups to display each group in a column */}
           {userGroups.map((group, index) => (
             <div key={index} className={classes['user__group']}>
               {group}
             </div>
           ))}
         </div>
       </div>
     </Card>
   );
};

export default LeaderboardUserYearly;