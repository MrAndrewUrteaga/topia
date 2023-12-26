import { User, ListUser } from "../models/userList";
import { calculateDistance } from "./findDistance";

export const listUsersInView = (users: Record<string, User>, positionX: string, positionY:string, screenWidth: number, screenHeight:number): ListUser[] => {
  const usersInView: ListUser[] = [];
  const avatarHeight = 125;
  const avatarWidth = 50;
  const xNumber = Number(positionX)
  const yNummber = Number(positionY)
  // WRITE SOLUTION BELOW. ADD USERNAME AND IS_BROADCASTER TO 'usersInView' IF USER FALLS INTO VISIBLE RANGE
  for (const userId in users) {
    if (users.hasOwnProperty(userId)) {
      const user = users[userId];
      const { x, y } = user;
      const distance = calculateDistance(x,y, xNumber, yNummber).toFixed(2);

      // Calculate the bounds of the user's avatar
      const minX = x - avatarWidth / 2;
      const maxX = x + avatarWidth / 2;
      const minY = y - avatarHeight / 2;
      const maxY = y + avatarHeight / 2;

      // Check if the user's avatar is within the viewport
      const isInView =
        minX <= xNumber + screenWidth / 2 &&
        maxX >= xNumber - screenWidth / 2 &&
        minY <= yNummber + screenHeight / 2 &&
        maxY >= yNummber - screenHeight / 2;

      if (isInView) {
        usersInView.push({...users[userId], distance});
      }
    }
  }
  // END SOLUTION SECTION

  usersInView.sort((a,b) => Number(a.distance) -Number(b.distance));

  return usersInView;
}