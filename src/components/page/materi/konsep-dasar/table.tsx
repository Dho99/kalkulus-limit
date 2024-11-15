import { Table } from "@chakra-ui/react";
import { Theme } from "@chakra-ui/react";
import LatexRenderer from "@/components/LatexRenderer";
import { BiArrowBack } from "react-icons/bi";

const BasicTable = () => {
  const items = [
    { th: "x", td: "f(x)" },
    { th: "0,8", td: "1,8" },
    { th: "0,9", td: "1,9" },
    { th: "0,99", td: "1,99" },
    { th: "...", td: "..." },
    { th: "1", td: "-" },
    { th: "...", td: "..." },
    { th: "1,01", td: "2,01" },
    { th: "1,1", td: "2,1" },
    { th: "1,2", td: "2,2" },
  ];

  return (
    <Theme appearance={"light"}>
      <Table.ScrollArea borderWidth="1px" maxW="dvw">
        <Table.Root size="lg" showColumnBorder={true}>
          <Table.Header>
            <Table.Row>
              {items.map((item, key) => {
                    if (key == 0) {
                      return (
                        <Table.ColumnHeader key={key}>
                          <LatexRenderer expression={item.th} />
                        </Table.ColumnHeader>
                      );
                    } else {
                      return <Table.ColumnHeader key={key}>{item.th}</Table.ColumnHeader>;
                    }
              })}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              {items.map((item, key) => {
                if (key == 0) {
                  return (
                    <Table.Cell key={key}>
                      <LatexRenderer expression={item.td} />
                    </Table.Cell>
                  );
                } else {
                  return <Table.Cell key={key}>{item.td}</Table.Cell>;
                }
              })}
            </Table.Row>
            <Table.Row>
              <Table.Cell colSpan={5} textAlign={"end"}>
                <BiArrowBack
                  style={{ fontSize: "30px", rotate: "180deg", margin: "0 auto" }}
                />
              </Table.Cell>
              <Table.Cell colSpan={5}>
                <BiArrowBack style={{ fontSize: "30px", margin: "0 auto" }} />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell colSpan={5}>
                <LatexRenderer
                  expression={"\\lim_{x-1^-} = \\frac{x^2-1}{x-1} = 2"}
                />
              </Table.Cell>
              <Table.Cell colSpan={5}>
                <LatexRenderer
                  expression={"\\lim_{x-1^+} = \\frac{x^2-1}{x-1} = 2"}
                />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell colSpan={10}>
                <LatexRenderer
                  expression={"\\lim_{x-1} = \\frac{x^2-1}{x-1} = 2"}
                />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root> 
      </Table.ScrollArea>
    </Theme>
  );
};

export default BasicTable;
