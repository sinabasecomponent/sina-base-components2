import { useContext } from "react";
import { Colors } from "../../colors";
import { Collapse } from "./collapse";
import { LevelContext } from "./context/levelProvider";
import { Item } from "./item";

export interface TreeDataProps {
  title: string;
  id: string;
  isActive?: boolean;
  children?: TreeDataProps[];
}

export interface TreeProps {
  data: TreeDataProps[];
  activeLeaf?: string | null;
  onSelectLeaf?: (id: string) => void;
}

const Tree = ({ data, activeLeaf, onSelectLeaf }: TreeProps) => {
  const level = useContext(LevelContext);
  const handleClickLeaf = (value: string) => {
    if (level !== 3) return;
    onSelectLeaf?.(value);
  };

  const backgourndColor =
    level === 1
      ? Colors.color_secondary_3
      : level === 2
      ? Colors.color_primary_6
      : level === 3
      ? Colors.color_primary_3
      : Colors.color_primary_3;

  const textColor =
    level === 1
      ? Colors.color_secondary_1
      : level === 2
      ? Colors.color_primary_1
      : level === 3
      ? Colors.color_white
      : Colors.color_white;

  return (
    <div style={{ paddingInlineStart: level > 1 ? 32 : 0 }}>
      {data.map(({ children, id, title }) => {
        if (children) {
          return (
            <Collapse
              textColor={textColor}
              backgroundColor={backgourndColor}
              title={title}
              level={level}
              key={id}
            >
              <LevelContext.Provider value={level + 1}>
                <Tree
                  onSelectLeaf={onSelectLeaf}
                  activeLeaf={activeLeaf}
                  data={children}
                />
              </LevelContext.Provider>
            </Collapse>
          );
        }
        return (
          <Item
            fontSize={14}
            textColor={textColor}
            isActiveLeaf={id === activeLeaf}
            backgroundColor={backgourndColor}
            title={title}
            key={id}
            level={level}
            onClick={() => handleClickLeaf(id)}
          />
        );
      })}
    </div>
  );
};

export { Tree };
