declare module '@henrique1204/cms-utility' {
  import type { UseBoundStore, StoreApi } from 'zustand';

  type ContentControl = {
    onReceiveValue: () => Promise<string>;
    onUpdateValue: (id: string, value: string) => Promise<void>;
  };

  type ContentField = {
    id: string;
    groupId: string;
    type: string;
    label: string;
    defaultValue: any;
  } & ContentControl;

  type ContentGroup = {
    id: string;
    title: string;
    fields: string[];
  };

  type CMSSchemaStore = {
    groups: ContentGroup[];
    fields: ContentField[];
    addGroup: (group: Omit<ContentGroup, 'fields'>) => void;
    addField: (field: ContentField) => void;
  };

  const store: {
    CMSSchemaStore: {
      useStore: UseBoundStore<StoreApi<CMSSchemaStore>>;
      reset: () => void;
    };
  };

  const useCases: {
    CMSSchema: {
      createGroup: (newGroup: Omit<ContentGroup, 'fields'>) => void;
      addField: (newGroup: ContentField) => void;
    };
  };

  const exceptions: {
    CMSSchemaStoreExceptions: {
      CMSSchemaStoreException: string;
      GroupAlreadyExistsException: string;
      FieldAlreadyExistsException: string;
      GroupNotFoundException: string;
      FieldNotFoundException: string;
    };
  };
}
