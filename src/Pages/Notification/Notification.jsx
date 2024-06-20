/** @format */

import React, { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import "./Notification.css";
import {
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  TableContainer,
  Input,
  Image,
  Img,
  Td,
} from "@chakra-ui/react";
import { MdKeyboardBackspace } from "react-icons/md";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NotificationComp from "../../Components/NotificationComp/NotificationComp";
import Loader from "../../Components/Loader/Loader";

const notificationData = [
  {
    _id: 1,
    name: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    _id: 2,
    name: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];

const Notification = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  return (
    <Layout>
      <Box className='banner_page_container'>
        {/* Header Section */}
        <Box className='header_section'>
          <Box className='header_back_section'>
            <Button className='back_button' onClick={() => navigate(-1)}>
              <MdKeyboardBackspace />
            </Button>
            <span className='header_title'>Notification Management</span>
          </Box>
        </Box>

        {/* Table Section */}
        <Box className='banner_section'>
          <TableContainer>
            <Table variant='simple'>
              <Thead className='table_head'>
                <Tr>
                  <Th className='table_header_item'>SL NO</Th>
                  <Th className='table_header_item'>Name</Th>
                  <Th className='table_header_item'>Description</Th>
                </Tr>
              </Thead>
              {loading ? (
                // Loader Section
                <Tr className='empty_table_row'>
                  <Td className='empty_table_row' colSpan='7'>
                    <Box className='empty_table_list'>
                      <Loader />
                    </Box>
                  </Td>
                </Tr>
              ) : (
                <>
                  {(notificationData || []).length > 0 ? (
                    // Rendering components
                    <>
                      {notificationData.map((data, index) => (
                        <Tbody key={data._id}>
                          <NotificationComp data={data} index={index} />
                        </Tbody>
                      ))}
                    </>
                  ) : (
                    // Empty list section
                    <Tr className='empty_table_row'>
                      <Td className='empty_table_row' colSpan='7'>
                        <Box className='empty_table_list'>No data found</Box>
                      </Td>
                    </Tr>
                  )}
                </>
              )}
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Layout>
  );
};

export default Notification;
