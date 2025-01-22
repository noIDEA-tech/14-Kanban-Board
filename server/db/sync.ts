import { sequelize, User } from '../src/models';

async function syncDatabase() {
  try {
    // Force: true means it will drop (delete) all tables first
    // Be careful with this in production - it deletes all data!
    await sequelize.sync({ force: true });
    
    // Create our first user - this will automatically handle
    // the createdAt and updatedAt timestamps for us
    const initialUser = await User.create({
      username: 'RadiantComet',
      password: 'password'
    });

    console.log('Database synced successfully');
    console.log('Initial user created:', initialUser.username);

  } catch (error) {
    console.error('Error syncing database:', error);
    // Log the full error for debugging
    console.error('Details:', error);
    process.exit(1); // Exit with error code
  } finally {
    // Close the database connection when we're done
    await sequelize.close();
  }
}

// Call the function and handle any unhandled promise rejections
syncDatabase().catch(error => {
  console.error('Unhandled error:', error);
  process.exit(1);
});