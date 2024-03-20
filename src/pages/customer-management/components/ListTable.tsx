import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import Badge from "react-bootstrap/Badge";
import { TCustomerItem } from "../types/index";

type TDataTable = {
  dataTable: Array<TCustomerItem>;
  onClickPage: (p: number) => void;
  onOpenModal: {
    add: (data: TCustomerItem) => void;
    edit: (data: TCustomerItem) => void;
    delete: (data: TCustomerItem) => void;
  };
  activePage: number;
};

type TPaginationList = {
  onClickPage: (p: number) => void;
  activePage: number;
};

const PaginationList = ({ onClickPage, activePage }: TPaginationList) => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7].map((number) => {
        return (
          <Pagination.Item
            onClick={() => onClickPage(number)}
            key={number}
            active={number === activePage}
          >
            {number}
          </Pagination.Item>
        );
      })}
    </>
  );
};

const ListTable = ({
  dataTable,
  onClickPage,
  activePage,
  onOpenModal,
}: TDataTable) => {
  const mapStatus = (status: string | number) => {
    switch (status) {
      case 1:
        return <Badge bg="success">Aktif</Badge>;
      case 0:
        return <Badge bg="danger">Tidak aktif</Badge>;
      default:
        return "Draft";
    }
  };

  return (
    <div>
      <Table responsive={true} striped borderless>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Address</th>
            <th>Status</th>
            <th>Total Order</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dataTable?.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data?.no}</td>
                <td>{data?.name}</td>
                <td>{data?.email}</td>
                <td>{data?.username}</td>
                <td>{data?.address}</td>
                <td>{mapStatus(data?.status as string)}</td>
                <td>{data?.totalOrder}</td>
                <td>
                  <div className="d-flex flex-lg-row gap-3  ">
                    <div role="button" onClick={() => onOpenModal.view(data)}>
                      <i className="bi bi-box-arrow-up-right"></i>
                    </div>
                    <div role="button" onClick={() => onOpenModal.edit(data)}>
                      <i className="bi bi-pencil-square"></i>
                    </div>
                    <div role="button" onClick={() => onOpenModal.delete(data)}>
                      <i className="bi bi-trash"></i>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div
        style={{ borderBottom: "1px solid #eee" }}
        className="d-flex justify-content-end mt-2"
      >
        <Pagination>
          <PaginationList onClickPage={onClickPage} activePage={activePage} />
        </Pagination>
      </div>
    </div>
  );
};

export default ListTable;
