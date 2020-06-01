import React, { useState, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';

import api from '../../services/api';

const Repositories = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function getRepos() {
      const res = await api.get('/users/danielj06/repos');
      setRepos(res.data);
    }
    getRepos()
  }, [])

  return (
    <View>
      <FlatList
        data={repos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item: repo }) => (
          <Text>{repo.name}</Text>
        )}
      />
    </View>
  );
}

export default Repositories;
