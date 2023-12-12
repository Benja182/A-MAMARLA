// CreatePost.js
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageURL: '',
  });

  const history = useHistory();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await api.post('/posts', formData);
      history.push('/posts');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <Container className="mt-4">
      <h2>Create a New Post</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formImageURL">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter image URL"
            name="imageURL"
            value={formData.imageURL}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create Post
        </Button>
      </Form>
    </Container>
  );
};

export default CreatePost;
