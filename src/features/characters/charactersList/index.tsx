import { List, Result, Spin } from "antd";
import React from "react";
import { useCharacters } from "../useCharacters";

interface CharactersListProps {
  urls: string[];
}

const CharactersList: React.FC<CharactersListProps> = ({ urls }) => {
  const { data: characters, error, loading } = useCharacters(urls);

  if (error) {
    return <Result status="error" title={error} />;
  }
  if (loading) {
    return <Spin />;
  }
  return <p>{characters?.map((character) => character.name).join(", ")}.</p>;
  return (
    <List
      dataSource={characters}
      loading={loading}
      renderItem={(item) => (
        <List.Item title={item.name}>{item.name}</List.Item>
      )}
    />
  );
};

export default CharactersList;
