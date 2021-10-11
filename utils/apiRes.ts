import { ReasonPhrases, StatusCodes } from 'http-status-codes';

const Res = (res, data, error) => {
  let statusCode: StatusCodes = StatusCodes.OK;
  let status: 'success' | 'failed' = 'success';

  let errorMessage: ReasonPhrases = ReasonPhrases.ACCEPTED;

  if (error) {
    status = 'failed';

    // * MORE WORK NEEDED HERE
    statusCode = StatusCodes.BAD_REQUEST;
    errorMessage = ReasonPhrases.BAD_REQUEST;
  }

  return res
    .status(statusCode)
    .json({ status, data: data, error: error?.code });
};

export default Res;
