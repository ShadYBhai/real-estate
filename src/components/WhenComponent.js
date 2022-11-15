import React from "react";

const WhenComponent = () => {
  return (
    <div>
      <form action="/action_page.php">
        <label for="birthday">Choose:</label>
        <input type="date" id="birthday" name="birthday" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default WhenComponent;
