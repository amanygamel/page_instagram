import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import CircularImage from './components/CircularImage';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Post from "./components/Post";
export default function App() {
  return (
    <View style={{ flex: 1 }}>
    <Post/>
    </View>
  );
}

const styles = StyleSheet.create({});
