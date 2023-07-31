# SocialMediaApplication

# Table of contents
1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Features](#features)
    1. [User Registration and Authentication](#registration)
    2. [Profile Creation and Editing](#profile)
    3. [Home Feed](#feed)
    4. [Post Creation](#post)
    5. [Interactions](#interactions)
    6. [Follow and Unfollow](#follow)
    7. [Privacy Settings](#privacy)
5. [GUI](#gui)

## The project's goal and a brief description: <a name="introduction"></a>
The goal of a Social Media application is to connect people and facilitate communication, content sharing, and social interactions in a virtual environment. Users can create profiles, connect with friends, and follow celebrities or influencers. The application enables users to post updates, share multimedia content, interact through likes, and comments.

## Prerequisites <a name="prerequisites"></a>

The setups steps expect following tools installed on the system.

- Ruby [3.0.0]
- Rails [7.0.6]

#### Check out the repository:

```bash
git clone git@github.com:vestinabert/SocialMediaApplication.git
```

#### Migrate the database:

Run the following commands to create and setup the database.

```ruby
bin/rails db:migrate
```

#### Start the Rails server:

You can start the rails server using the command given below.

```ruby
rails s
```
And now you can visit the site with the URL http://localhost:3000

## Features: <a name="features"></a>

#### User Registration and Authentication: <a name="registration"></a>
- New users can sign up with their email, username.
- Existing users can log in using their credentials.

#### Profile Creation and Editing: <a name="profile"></a>
- Users can create and personalize their profiles with a profile picture, bio, and other relevant information.
- They can edit their profiles to update information.

#### Home Feed: <a name="feed"></a>
- Users' home feeds display a chronological stream of posts from users they follow.

#### Post Creation: <a name="post"></a>
- Users can create posts by uploading images from their devices.
- They can add captions, location tags, and other relevant information to the post.

#### Interactions: <a name="interactions"></a>
- Users can like posts to show appreciation.
- They can comment on posts to engage in discussions.

#### Follow and Unfollow: <a name="follow"></a>
- Users can follow other accounts to subscribe to their content updates.
- They can unfollow accounts if they no longer wish to see their posts.

#### Privacy Settings: <a name="privacy"></a>
- Users can adjust their privacy settings to control who can see their posts and interact with them.
- Options may include public accounts and private accounts.

## GUI: <a name="gui"></a>

#### User Registration and Authentication: 
<img width="1439" alt="log in" src="https://github.com/vestinabert/SocialMediaApplication/assets/127593981/842aeef3-3029-4f84-9d8b-d9d90d975bb4">

#### Profile Creation and Editing: 
<img width="1435" alt="profile" src="https://github.com/vestinabert/SocialMediaApplication/assets/127593981/01313e33-8829-43e2-9d9a-7ed0312572aa"> <br><br>
<img width="1423" alt="posts" src="https://github.com/vestinabert/SocialMediaApplication/assets/127593981/8755e6bc-44d8-4505-956d-9804710ccefd"> <br><br>
<img width="1437" alt="edit" src="https://github.com/vestinabert/SocialMediaApplication/assets/127593981/18250d81-19c9-487c-8c44-a46ce65fce60">

#### Home Feed: 
<img width="1440" alt="feed" src="https://github.com/vestinabert/SocialMediaApplication/assets/127593981/5c152d35-be29-453f-b15f-0a4c6c997d28">

#### Post Creation: 
<img width="1439" alt="upload" src="https://github.com/vestinabert/SocialMediaApplication/assets/127593981/c8334c73-bc12-4322-bf88-6bfcf07dd299">

#### Interactions: 
<img width="1437" alt="likes" src="https://github.com/vestinabert/SocialMediaApplication/assets/127593981/8aa00beb-e6ab-40c7-8407-ba86b254b98d"> <br><br>
<img width="1427" alt="comments" src="https://github.com/vestinabert/SocialMediaApplication/assets/127593981/9af4571a-1308-41c2-8484-77ac95d7cdea">

#### Privacy Settings: 
<img width="1440" alt="private" src="https://github.com/vestinabert/SocialMediaApplication/assets/127593981/0e4e52f2-e82e-4e77-bdd2-a3f77027498f">
