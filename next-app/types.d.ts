declare module "@heroicons/*";
type Meta = {
  errorCode: number;
  message: string;
  type: string;
};

type Login = {
  Meta: Meta;
  Data: {
    result: {
      userId: number;
      name: string;
      FName: string;
      LName: string;
      cellphone: string;
      Addrss: string;
      Credit: string;
      CustImg: null;
      IntroduceCode: string;
      done: boolean;
      custId: number;
      AccSystem: boolean;
      SaleSystem: boolean;
      WareSystem: boolean;
      VisitSystem: boolean;
      VisitorManagment: boolean;
      AccNo: string;
      Shaba: string;
      CardNumber: string;
      Perms: string;
    };
  };
};

type MenuResult = {
  Id: number;
  Name: string;
  ParentId: number;
  HasChild: boolean;
  icon: null;
  Path: string;
};

type Menu = {
  Meta: {
    errorCode: number;
    message: string;
    type: string;
  };
  Data: {
    result: MenuResult[];
  };
};

type MenuItem = {
  menuResult: MenuResult;
  children?: MenuItem[];
};

type CupboardData = {
  Id: number;
  Code: string;
  FullCode: string;
  FullName: string;
  ProdDate: string;
  ExpDate: string;
  GTIN: string;
  IRC: string;
  UID: string;
  Tmp: number;
  Inc: number;
  Outc: number;
  Stck: number;
  Status: number;
};

type Cupboard = {
  Meta: Meta;
  Data: {
    result: CupboardData[];
  };
};

type FinancialYear_SystemData = {
  Id: number;
  Name: string;
};

type FinancialYear_System = {
  Meta;
  Data: {
    result: {
      total_count: number;
      SearchResults: FinancialYear_SystemData[];
    };
  };
};
