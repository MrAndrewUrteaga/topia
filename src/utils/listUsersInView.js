export default function listUsersInView(users, positionX, positionY, screenWidth, screenHeight) {
  const usersInView = [];
  const avatarHeight = 125;
  const avatarWidth = 50;

  // WRITE SOLUTION BELOW. ADD USERNAME AND IS_BROADCASTER TO 'usersInView' IF USER FALLS INTO VISIBLE RANGE
  for (const userId in users) {
    if (users.hasOwnProperty(userId)) {
      const user = users[userId];
      const { x, y } = user;

      // Calculate the bounds of the user's avatar
      const minX = x - avatarWidth / 2;
      const maxX = x + avatarWidth / 2;
      const minY = y - avatarHeight / 2;
      const maxY = y + avatarHeight / 2;

      // Check if the user's avatar is within the viewport
      const isInView =
        minX <= positionX + screenWidth / 2 &&
        maxX >= positionX - screenWidth / 2 &&
        minY <= positionY + screenHeight / 2 &&
        maxY >= positionY - screenHeight / 2;

      if (isInView) {
        usersInView.push(userId);
      }
    }
  }
  // END SOLUTION SECTION

  return usersInView;
}