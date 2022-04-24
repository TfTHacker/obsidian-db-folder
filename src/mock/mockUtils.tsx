import faker from '@faker-js/faker';
import {
  MarkdownRenderer
} from "obsidian";
import React,{useRef,useLayoutEffect} from 'react';
import { randomColor } from 'helpers/Colors';
import { DataTypes } from 'helpers/Constants';
import {TableDataType, TableColumn, TableRow} from 'cdm/FolderModel';
import { LOGGER } from 'services/Logger';
export function makeData(count:number):TableDataType {
    const data:Array<TableRow> = [];
    const options = [];
    const note:any = null;
    for (let i = 0; i < count; i++) {
      const row = {
        id: faker.mersenne.rand(),
        title: faker.system.fileName(),
        note: note
      };
      options.push({ label: row.title, backgroundColor: randomColor() });
  
      data.push(row);
    }
    const columns:TableColumn[] = [
      {
        id: "title",
        label: 'File Name',
        key: 'title',
        accessor: 'title',
        position: 0,
        minWidth: 100,
        dataType: DataTypes.TEXT,
        options: options,
        Cell: ({ cell }:any) => {
          const { value } = cell;
          const containerRef = useRef<HTMLElement>();
          LOGGER.info("containerRef: "+containerRef);
          useLayoutEffect(() => {
            MarkdownRenderer.renderMarkdown(
              '[[readme]]',
              containerRef.current,
              'readme.md',
              null
            );
          })
          
          return <span ref={containerRef}></span>;
        }
      },
      {
        id: "status",
        label: 'Status',
        key: 'Status',
        accessor: 'Status',
        position: 1,
        minWidth: 100,
        dataType: DataTypes.TEXT,
        options: options,
      }
    ];
    return { columns: columns, metadataColumns:[], data: data, skipReset: false, view:null };
  }
  